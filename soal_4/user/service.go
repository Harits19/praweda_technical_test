package user

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"soal_4/my_http"
)

func GetAllUser(page string, results string) (*http.Response, error) {

	url := fmt.Sprintf("https://randomuser.me/api?results=%s&page=%s", results, page)

	response, err := my_http.Request("GET", url, nil, http.StatusOK)
	fmt.Println("response from api random user", response.Body)

	if err != nil {
		return response, err
	}

	return response, nil
}

func MapAllUserResponse(body io.ReadCloser) (interface{}, error) {

	decoded := &RandomUserResponse{}
	err := json.NewDecoder(body).Decode(decoded)

	if err != nil {
		return nil, err
	}

	newResults := []User{}

	for _, item := range decoded.Results {

		name, location, picture := item.Name, item.Location, item.Picture

		newItem := User{
			Name:     fmt.Sprintf("%s, %s %s", name.Title, name.First, name.Last),
			Location: fmt.Sprintf("%d,%s, %s,%s , %s", location.Street.Number, location.Street.Name, location.City, location.State, location.Country),
			Email:    item.Email,
			Age:      item.Registered.Age,
			Phone:    item.Phone,
			Cell:     item.Cell,
			Picture:  []string{picture.Large, picture.Medium, picture.Thumbnail},
		}

		newResults = append(newResults, newItem)

	}

	newDecoded := UserResponse{
		Info:    decoded.Info,
		Results: newResults,
	}

	return newDecoded, nil
}
