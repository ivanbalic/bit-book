import { BASE_ENDPOINT } from '../../shared/constants';
import VideoPost from '../../models/VideoPost';
import ImagePost from '../../models/ImagePost';
import TextPost from '../../models/TextPost';
import Comment from '../../models/Comment';

class CommentService {

    fetchComments(postId) {

        const COMMENTS_ENDPOINT = `${BASE_ENDPOINT}/comments?postId=3351`;

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

                const mappedComments = comments.map((comment) => {
                    return new Comment(comment.id, comment.body, comment.postId, comment.authorName, comment.authorId);
                });
                return mappedComments;
            });
    }

    fetchPost(postId, postType) {

        let queryParam;

        switch (postType) {
            case 'text':
                queryParam = 'TextPosts';
                break;
            case 'video':
                queryParam = 'VideoPosts';
                break;
            case 'image':
                queryParam = 'ImagePosts';
                break;

            default:
                break;
        }

        const POSTS_ENDPOINT = `${BASE_ENDPOINT}/${queryParam}/${postId}`;

        return fetch(POSTS_ENDPOINT, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            }
        })
            .then((response) => {

                return response.json();
            })
            .then((post) => {

                switch (post.type) {
                    case "image":
                        return new ImagePost(post)
                    case "video":
                        return new VideoPost(post);
                    case "text":
                        return new TextPost(post)
                    default:
                        throw new Error("Invalid post type")
                }
            })

    }

}

export const commentService = new CommentService();