export default interface BoardListItem {
    boardNumber : number;
    title : string;
    content : string;
    boardTitleImage: string | null;
    favoriteCount : number;
    commentCOunt : number;
    viewCount : number;
    writeDatetime : string;
    writeNickname : string;
    writerProfileImage : string | null;
}