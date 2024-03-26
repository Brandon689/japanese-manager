package main

import (
	"fmt"
	"github.com/pocketbase/pocketbase/apis"
	"log"
	"net/http"
	"os"
	core2 "pocketbase-react-starter/logic"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	app := pocketbase.New()

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

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
