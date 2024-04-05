package api

import (
	"github.com/labstack/echo/v5"
	"github.com/rl404/verniy"
	"log"
	"net/http"
)

func SearchAnime(c echo.Context, v *verniy.Client) error {
	search := c.QueryParam("search")

	vv := verniy.CharacterEdgeFieldVoiceActors(
		verniy.CharacterEdgeParamVoiceActors{
			Language: verniy.StaffLanguageJapanese,
			Sort:     []verniy.StaffSort{verniy.StaffSortID},
		},
		verniy.StaffFieldID,
		verniy.StaffFieldAge,
		verniy.StaffFieldImage(verniy.StaffImageFieldMedium),
		verniy.StaffFieldName(verniy.StaffNameFieldFull, verniy.StaffNameFieldNative))

	title := verniy.MediaFieldTitle(verniy.MediaTitleFieldRomaji,
		verniy.MediaTitleFieldNative,
		verniy.MediaTitleFieldEnglish)
	coverImg := verniy.MediaFieldCoverImage(verniy.MediaCoverImageFieldLarge)
	param := verniy.MediaParamCharacters{
		PerPage: 20,
		Page:    1,
	}
	charName := verniy.CharacterFieldName(
		verniy.CharacterNameFieldFirst,
		verniy.CharacterNameFieldFull,
		verniy.CharacterNameFieldLast,
		verniy.CharacterNameFieldNative,
	)
	b := verniy.MediaConnectionFieldEdges(verniy.MediaEdgeFieldCharacterName, verniy.MediaEdgeFieldCharacterRole)
	param2 := verniy.CharacterParamMedia{
		PerPage: 20,
		Page:    1,
	}
	z := verniy.CharacterFieldMedia(param2, b)

	charEdge := verniy.CharacterEdgeFieldNode(
		verniy.CharacterFieldID,
		verniy.CharacterFieldAge,
		verniy.CharacterFieldImage(verniy.CharacterImageFieldMedium),
		charName,
		z)

	n := verniy.CharacterEdgeFieldNode(verniy.CharacterFieldGender)

	cb := verniy.CharacterConnectionFieldEdges(
		charEdge,
		verniy.CharacterEdgeFieldRole,
		verniy.CharacterEdgeFieldName,
		verniy.CharacterEdgeFieldFavouriteOrder,
		vv,
		n)

	characters := verniy.MediaFieldCharacters(param, cb)

	tags := verniy.MediaFieldTags(
		verniy.MediaTagFieldID,
		verniy.MediaTagFieldName,
		verniy.MediaTagFieldDescription,
		verniy.MediaTagFieldRank)

	data, err := v.SearchAnime(verniy.PageParamMedia{
		Search: search,
	}, 1, 20,
		verniy.MediaFieldBannerImage,
		verniy.MediaFieldID,
		verniy.MediaFieldType,
		verniy.MediaFieldFormat,
		verniy.MediaFieldStatus,
		verniy.MediaFieldDescription,
		verniy.MediaFieldStartDate,
		verniy.MediaFieldEndDate,
		verniy.MediaFieldSeason,
		verniy.MediaFieldSeasonYear,
		verniy.MediaFieldEpisodes,
		verniy.MediaFieldDuration,
		verniy.MediaFieldAverageScore,
		verniy.MediaFieldPopularity,
		verniy.MediaFieldGenres,
		verniy.MediaFieldMeanScore,
		verniy.MediaFieldFavourites,
		characters,
		coverImg,
		title,
		tags,
	)
	if err != nil {
		log.Fatal(err)
	}
	return c.JSON(http.StatusOK, data)
}
