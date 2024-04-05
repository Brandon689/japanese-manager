package api

import (
	"github.com/asticode/go-astisub"
	"github.com/labstack/echo/v5"
	"net/http"
)

type Subtitle struct {
	Lines            []string
	Start, End       float64
	StartMin, EndMin float64
}

func Sub(c echo.Context) error {
	s1, _ := astisub.OpenFile("C:/subtitle/jp/processed/Arakawa Under the Bridge/Arakawa Under the Bridge 01.srt")
	var a []Subtitle
	for i := 0; i < len(s1.Items); i++ {
		var x []string
		for j := 0; j < len(s1.Items[i].Lines); j++ {

			x = append(x, s1.Items[i].Lines[j].String())
			r := Subtitle{
				Lines:    x,
				StartMin: s1.Items[i].StartAt.Minutes(),
				EndMin:   s1.Items[i].EndAt.Minutes(),
				Start:    s1.Items[i].StartAt.Seconds(),
				End:      s1.Items[i].EndAt.Seconds(),
			}
			//r := Subtitle{
			//	Line: s1.Items[i].Lines[j].String(),
			//	StartMin: s1.Items[i].,
			//}
			a = append(a, r)
		}
	}
	return c.JSON(http.StatusOK, a)
}
