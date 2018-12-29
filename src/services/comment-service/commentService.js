import { BASE_ENDPOINT } from '../../shared/constants';
import Comment from '../../models/Comment';
import { headers } from '../../shared/headers';

class CommentService {

    fetchComments(postId) {

        const COMMENTS_ENDPOINT = `${BASE_ENDPOINT}/comments?postId=${postId}`;

        return fetch(COMMENTS_ENDPOINT, headers.getRequestHeader())
            .then((response) => {

                return response.json();
            })
            .then((comments) => {

                const mappedComments = comments.map((comment) => {
                    return new Comment(comment.id, comment.body, comment.postId, comment.authorName, comment.authorId);
                });
                return mappedComments;
            });
    }

    createComment(data) {
        const POSTS_ENDPOINT = `${BASE_ENDPOINT}/Comments`;

        return fetch(POSTS_ENDPOINT, headers.postRequestHeader(data))
    }
}

export const commentService = new CommentService();
