package main

import (
	"fmt"
	"net/http"
	"soal_4/user"

	"github.com/gin-gonic/gin"
)

func main() {

	fmt.Println("start server")

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	user.Route(r);

	r.Run();
}
