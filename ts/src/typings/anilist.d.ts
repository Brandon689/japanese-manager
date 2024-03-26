declare interface Page {
    pageInfo: PageInfo;
    media: Media[];
    characters: Character[];
    staff: Staff[];
    studios: Studio[];
}

declare interface Media {
    id: number;
    idMal?: number;
    title?: MediaTitle;
    type?: MediaType;
    format?: MediaFormat;
    status?: MediaStatus;
    description?: string;
    startDate?: FuzzyDate;
    endDate?: FuzzyDate;
    season?: MediaSeason;
    seasonYear?: number;
    seasonInt?: number;
    episodes?: number;
    duration?: number;
    chapters?: number;
    volumes?: number;
    countryOfOrigin?: string;
    isLicensed?: boolean;
    source?: MediaSource;
    hashTag?: string;
    trailer?: MediaTrailer;
    updatedAt?: number;
    coverImage?: MediaCoverImage;
    bannerImage?: string;
    genres: string[];
    synonyms: string[];
    averageScore?: number;
    meanScore?: number;
    popularity?: number;
    isLocked?: boolean;
    trending?: number;
    favourites?: number;
    tags: MediaTag[];
    relations?: MediaConnection;
    characters?: CharacterConnection;
    staff?: StaffConnection;
    studios?: StudioConnection;
    isFavourite?: boolean;
    isAdult?: boolean;
    nextAiringEpisode?: AiringSchedule;
    airingSchedule?: AiringScheduleConnection;
    trends?: MediaTrendConnection;
    externalLinks: MediaExternalLink[];
    streamingEpisodes: MediaStreamingEpisode[];
    rankings: MediaRank[];
    mediaListEntry?: MediaList;
    reviews?: ReviewConnection;
    recommendations?: RecommendationConnection;
    stats?: MediaStats;
    siteUrl?: string;
    autoCreateForumThread?: boolean;
    isRecommendationBlocked?: boolean;
    modNotes?: string;
}

declare interface MediaTitle {
    romaji?: string;
    english?: string;
    native?: string;
    userPreferred?: string;
}

declare interface FuzzyDate {
    year?: number;
    month?: number;
    day?: number;
}

declare interface MediaTrailer {
    id?: string;
    site?: string;
    thumbnail?: string;
}

declare interface MediaCoverImage {
    extraLarge?: string;
    large?: string;
    medium?: string;
    color?: string;
}

declare interface MediaTag {
    id: number;
    name: string;
    description?: string;
    category?: string;
    rank?: number;
    isGeneralSpoiler?: boolean;
    isMediaSpoiler?: boolean;
    isAdult?: boolean;
}

declare interface MediaConnection {
    edges: MediaEdge[];
    nodes: Media[];
    pageInfo?: PageInfo;
}

declare interface MediaEdge {
    node?: Media;
    id?: number;
    relationType?: MediaRelation;
    isMainStudio: boolean;
    characters: Character[];
    characterRole?: CharacterRole;
    characterName?: string;
    roleNotes?: string;
    dubGroup?: string;
    staffRole?: string;
    voiceActors: Staff[];
    voiceActorRoles: StaffRoleType[];
    favouriteOrder?: number;
}

declare interface StaffRoleType {
    voiceActor?: Staff;
    roleNotes?: string;
    dubGroup?: string;
}

declare interface PageInfo {
    total?: number;
    perPage?: number;
    currentPage?: number;
    lastPage?: number;
    hasNextPage?: boolean;
}

declare interface CharacterConnection {
    edges: CharacterEdge[];
    nodes: Character[];
    pageInfo?: PageInfo;
}

declare interface CharacterEdge {
    node?: Character;
    id?: number;
    role?: CharacterRole;
    name?: string;
    voiceActors: Staff[];
    voiceActorRoles: StaffRoleType[];
    media: Media[];
    favouriteOrder?: number;
}

declare interface Character {
    id: number;
    name?: CharacterName;
    image?: CharacterImage;
    description?: string;
    gender?: string;
    dateOfBirth?: FuzzyDate;
    age?: string;
    isFavourite?: boolean;
    isFavouriteBlocked?: boolean;
    siteURL?: string;
    media?: MediaConnection;
    favourites?: number;
    modNotes?: string;
}

declare interface CharacterName {
    first?: string;
    middle?: string;
    last?: string;
    full?: string;
    native?: string;
    alternative: string[];
    alternativeSpoiler: string[];
    userPreferred?: string;
}

declare interface CharacterImage {
    large?: string;
    medium?: string;
}

declare interface StaffConnection {
    edges: StaffEdge[];
    nodes: Staff[];
    pageInfo?: PageInfo;
}

declare interface StaffEdge {
    node?: Staff;
    id?: number;
    role?: string;
    favouriteOrder?: number;
}

declare interface Staff {
    id: number;
    name?: StaffName;
    languageV2?: string;
    image?: StaffImage;
    description?: string;
    primaryOccupation: string[];
    gender?: string;
    dateOfBirth?: FuzzyDate;
    dateOfDeath?: FuzzyDate;
    age?: number;
    yearsActive: number[];
    homeTown?: string;
    isFavourite: boolean;
    isFavouriteBlocked: boolean;
    siteURL?: string;
    staffMedia?: MediaConnection;
    characters?: CharacterConnection;
    characterMedia?: MediaConnection;
    staff?: Staff;
    submitter?: User;
    submissionStatus?: number;
    submissionNotes?: string;
    favourites?: number;
    modNotes?: string;
}

declare interface StaffName {
    first?: string;
    middle?: string;
    last?: string;
    full?: string;
    native?: string;
    alternative: string[];
    userPreferred?: string;
}

declare interface StaffImage {
    large?: string;
    medium?: string;
}

declare interface StudioConnection {
    edges: StudioEdge[];
    nodes: Studio[];
    pageInfo?: PageInfo;
}

declare interface StudioEdge {
    node?: Studio;
    id?: number;
    isMain: boolean;
    favouriteOrder?: number;
}

declare interface Studio {
    id: number;
    name: string;
    isAnimationStudio: boolean;
    media?: MediaConnection;
    siteURL?: string;
    isFavourite: boolean;
    favourites?: number;
}

declare interface AiringSchedule {
    id: number;
    airingAt: number;
    timeUntilAiring: number;
    episode: number;
    mediaId: number;
    media?: Media;
}

declare interface AiringScheduleConnection {
    edges: AiringScheduleEdge[];
    nodes: AiringSchedule[];
    pageInfo?: PageInfo;
}

declare interface AiringScheduleEdge {
    node?: AiringSchedule;
    id?: number;
}

declare interface MediaTrendConnection {
    edges: MediaTrendEdge[];
    nodes: MediaTrend[];
    pageInfo?: PageInfo;
}

declare interface MediaTrendEdge {
    node?: MediaTrend;
}

declare interface MediaTrend {
    mediaId: number;
    date: number;
    trending: number;
    averageScore?: number;
    popularity?: number;
    inProgress?: number;
    releasing: boolean;
    episode?: number;
    media?: Media;
}

declare interface MediaExternalLink {
    id: number;
    url: string;
    site: string;
}

declare interface MediaStreamingEpisode {
    title?: string;
    thumbnail?: string;
    url?: string;
    site?: string;
}

declare interface MediaRank {
    id: number;
    rank: number;
    type: MediaRankType;
    format: MediaFormat;
    year?: number;
    season?: MediaSeason;
    allTime?: boolean;
    context: string;
}

declare interface MediaList {
    id: number;
    userId: number;
    mediaId: number;
    status?: MediaListStatus;
    score?: number;
    progress?: number;
    progressVolumes?: number;
    repeat?: number;
    priority?: number;
    private?: boolean;
    notes?: string;
    hiddenFromStatusLists?: boolean;
    customLists?: string;
    advancedScores?: string;
    startedAt?: FuzzyDate;
    completedAt?: FuzzyDate;
    updatedAt?: number;
    createdAt?: number;
    media?: Media;
    user?: User;
}

declare interface User {
    id: number;
    name: string;
    about?: string;
    avatar?: UserAvatar;
    bannerImage?: string;
    isFollowing?: boolean;
    isFollower?: boolean;
    isBlocked?: boolean;
    bans?: string;
    options?: UserOptions;
    mediaListOptions?: MediaListOptions;
    favourites?: Favourites;
    statistics?: UserStatisticTypes;
    unreadNotificationCount?: number;
    siteUrl?: string;
    donatorTier?: number;
    donatorBadge?: string;
    moderatorRoles: ModRole[];
    createdAt?: number;
    updatedAt?: number;
}

declare interface UserAvatar {
    large?: string;
    medium?: string;
}

declare interface UserOptions {
    titleLanguage?: UserTitleLanguage;
    displayAdultContent?: boolean;
    airingNotification?: boolean;
    profileColor?: string;
    notificationOptions: NotificationOption[];
    timezone?: string;
    activityMergeTime?: number;
    staffNameLanguage?: UserStaffNameLanguage;
}

declare interface NotificationOption {
    type?: NotificationType;
    enabled?: boolean;
}

declare interface MediaListOptions {
    scoreFormat?: ScoreFormat;
    rowOrder?: string;
    animeList?: MediaListTypeOptions;
    mangaList?: MediaListTypeOptions;
}

declare interface MediaListTypeOptions {
    sectionOrder: string[];
    splitCompletedSectionByFormat?: boolean;
    customLists: string[];
    advancedScoring: string[];
    advancedScoringEnabled?: boolean;
}

declare interface Favourites {
    anime?: MediaConnection;
    manga?: MediaConnection;
    characters?: CharacterConnection;
    staff?: StaffConnection;
    studios?: StudioConnection;
}

declare interface UserStatisticTypes {
    anime?: UserStatistics;
    manga?: UserStatistics;
}

declare interface UserStatistics {
    count: number;
    meanScore: number;
    standardDeviation: number;
    minutesWatched: number;
    episodesWatched: number;
    chaptersRead: number;
    volumesRead: number;
    formats: UserFormatStatistic[];
    statuses: UserStatusStatistic[];
    scores: UserScoreStatistic[];
    lengths: UserLengthStatistic[];
    releaseYears: UserReleaseYearStatistic[];
    startYears: UserStartYearStatistic[];
    genres: UserGenreStatistic[];
    tags: UserTagStatistic[];
    countries: UserCountryStatistic[];
    voiceActors: UserVoiceActorStatistic[];
    staff: UserStaffStatistic[];
    studios: UserStudioStatistic[];
}

declare interface UserFormatStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chapterRead: number;
    mediaIDs: number[];
    format?: MediaFormat;
}

declare interface UserStatusStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    status?: MediaListStatus;
}

declare interface UserScoreStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    score?: number;
}

declare interface UserLengthStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    length?: string;
}

declare interface UserReleaseYearStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    releaseYear?: number;
}

declare interface UserStartYearStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    startYear?: number;
}

declare interface UserGenreStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    genre?: string;
}

declare interface UserTagStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    tag?: MediaTag;
}

declare interface UserCountryStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    country?: string;
}

declare interface UserVoiceActorStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    voiceActor?: Staff;
    characterIDs: number[];
}

declare interface UserStaffStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    staff?: Staff;
}

declare interface UserStudioStatistic {
    count: number;
    meanScore: number;
    minutesWatched: number;
    chaptersRead: number;
    mediaIDs: number[];
    studio?: Studio;
}

declare interface ReviewConnection {
    edges: ReviewEdge[];
    nodes: Review[];
    pageInfo?: PageInfo;
}

declare interface ReviewEdge {
    node?: Review;
}

declare interface Review {
    id: number;
    userId: number;
    mediaId: number;
    mediaType?: MediaType;
    summary?: string;
    body?: string;
    rating?: number;
    ratingAmount?: number;
    userRating?: ReviewRating;
    score?: number;
    private?: boolean;
    siteUrl?: string;
    createdAt: number;
    updatedAt: number;
    user?: User;
    media?: Media;
}

declare interface RecommendationConnection {
    edges: RecommendationEdge[];
    nodes: Recommendation[];
    pageInfo?: PageInfo;
}

declare interface RecommendationEdge {
    node?: Recommendation;
}

declare interface Recommendation {
    id: number;
    rating?: number;
    userRating?: RecommendationRating;
    media?: Media;
    mediaRecommendation?: Media;
    user?: User;
}

declare interface MediaStats {
    scoreDistribution: ScoreDistribution[];
    statusDistribution: StatusDistribution[];
}

declare interface ScoreDistribution {
    score?: number;
    amount?: number;
}

declare interface StatusDistribution {
    status?: MediaListStatus;
    amount?: number;
}

declare interface MediaListCollection {
    lists: MediaListGroup[];
    user?: User;
    hasNextChunk?: boolean;
}

declare interface MediaListGroup {
    entries: MediaList[];
    name?: string;
    isCustomList?: boolean;
    isSplitCompletedList?: boolean;
    status?: MediaListStatus;
}