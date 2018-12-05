import { BASE_ENDPOINT } from '../../shared/constants';
import Comment from '../../models/Comment';

class CommentService {

    fetchComments(postId) {

        const COMMENTS_ENDPOINT = `${BASE_ENDPOINT}/comments?postId=${postId}`;

        return fetch(COMMENTS_ENDPOINT, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then((response) => {

                return response.json();
            })
            .then((comments) => {
                console.log("Comments response:", comments);


                const mappedComments = comments.map((comment) => {
                    return new Comment(comment.id, comment.body, comment.postId, comment.authorName, comment.authorId);
                });
                return mappedComments;
            });
    }

    createComment(data) {
        const POSTS_ENDPOINT = `${BASE_ENDPOINT}/Comments`;

        return fetch(POSTS_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            },
            body: JSON.stringify(data),
        })
    }
}

export const commentService = new CommentService();