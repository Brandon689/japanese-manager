package main

import (
	"fmt"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/rl404/verniy"
	"log"
	"net/http"
	"os"
	"pocketbase-react-starter/api"
	core2 "pocketbase-react-starter/logic"
)

func main() {
	app := pocketbase.New()

	var v *verniy.Client
	v = verniy.New()

	// serves static files from the provided public dir (if exists)
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))

		e.Router.GET("/hello/:name", func(c echo.Context) error {
			name := c.PathParam("name")

			return c.JSON(http.StatusOK, map[string]string{"message": "Hello " + name})
		} /* optional middlewares */)

		e.Router.GET("/filesystem", func(c echo.Context) error {
			z := core2.ListFilesAll("C:\\2024\\10\\pocketbase-react-ts-starter\\pb")
			fmt.Println(z)
			return c.JSON(http.StatusOK, z)
		} /* optional middlewares */)
		e.Router.POST("/api/upload:anime", func(c echo.Context) error {

			name := c.PathParam("anime")

			// Call your handler function for file upload
			return core2.UploadFile(c, name)
		})

		e.Router.GET("/v", func(c echo.Context) error {

			titles := []string{"[CameEsp] Summertime Render - 8 [1080p][ESP-LAT-ENG][mkv].mkv", "[EMBER] Summertime Rendering - 23.mkv", "[SlyFox] Summertime Rendering - 07v2 [114987B5].mkv"}

			elements := core2.Titles(titles)

			z := core2.Title("")
			fmt.Println(z)
			return c.JSON(http.StatusOK, elements)
		} /* optional middlewares */)

		e.Router.GET("/anime", func(c echo.Context) error {
			return api.SearchAnime(c, v)
		})

		e.Router.GET("/subtitles/:anime", func(c echo.Context) error {

			name := c.PathParam("anime")
			dirPath := "uploads/" + name

			dir, err := os.Open(dirPath)
			if err != nil {
				log.Fatal(err)
			}
			defer dir.Close()

			files, err := dir.ReadDir(-1)
			if err != nil {
				log.Fatal(err)
			}

			var names []string
			//var names []types.Subtitles
			for _, file := range files {
				names = append(names, file.Name())
				fmt.Println(file.Name())
			}
			elements := core2.Titles(names)
			return c.JSON(http.StatusOK, elements)
		})

		e.Router.GET("/subtitles/:anime/:filename", func(c echo.Context) error {
			anime := c.PathParam("anime")
			filename := c.PathParam("filename")
			filePath := fmt.Sprintf("uploads/%s/%s", anime, filename)

			// Check if the file exists
			if _, err := os.Stat(filePath); os.IsNotExist(err) {
				return c.String(http.StatusNotFound, "File not found")
			}

			// Set the response header
			c.Response().Header().Set(echo.HeaderContentType, echo.MIMETextPlainCharsetUTF8)
			c.Response().Header().Set(echo.HeaderContentDisposition, fmt.Sprintf("attachment; filename=\"%s\"", filename))

			// Send the file to the client
			return c.File(filePath)
			//return c.JSON(http.StatusOK, api.Sub(c))
		})

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
