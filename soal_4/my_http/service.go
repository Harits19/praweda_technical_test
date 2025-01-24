package my_http

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

func StringToBuffer(value string) *bytes.Buffer {
	body := []byte(value)

	return bytes.NewBuffer(body)
}

func Request(method string, url string, body io.Reader, successStatusCode int) (*http.Response, error) {

	client := &http.Client{}

	request, err := http.NewRequest(method, url, body)

	if err != nil {

		return nil, err
	}

	response, err := client.Do(request)

	if err != nil {

		return nil, err
	}

	if response.StatusCode != successStatusCode {

		return response, (fmt.Errorf("failed to fetch with error code %d", response.StatusCode))
	}

	return response, nil
}
