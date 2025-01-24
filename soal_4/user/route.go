package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Route(r *gin.Engine) {

	r.GET("/user", func(c *gin.Context) {

		page := c.Query("pages")
		results := c.Query("results")

		response, err := GetAllUser(page, results)

		if err != nil {
			c.DataFromReader(response.StatusCode, response.ContentLength, "application/json", response.Body, nil)
			return
		}

		mappedResult, err := MapAllUserResponse(response.Body)

		if err != nil {

			c.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		c.JSON(response.StatusCode, mappedResult)
	})

}
