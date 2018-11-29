import { BASE_ENDPOINT } from '../../shared/constants';
import Post from '../../models/Post';

class PostService {

    fetchPosts() {
        const POSTS_ENDPOINT = `${BASE_ENDPOINT}/api/posts`;

        return fetch(POSTS_ENDPOINT, {
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
            .then((result) => {

                const mappedPosts = result.map((post) => {
                    if (post.type === 'text') {
                        const { commentsNum, dateCreated, id, type, userDisplayName, userId, text } = post;
                        return new Post(commentsNum, dateCreated, id, type, userDisplayName, userId, text);
                    } else if (post.type === 'video') {
                        const { commentsNum, dateCreated, id, type, userDisplayName, userId, videoUrl } = post;

                        return new Post(commentsNum, dateCreated, id, type, userDisplayName, userId, videoUrl);
                    }
                    const { commentsNum, dateCreated, id, type, userDisplayName, userId, imageUrl } = post;
                    return new Post(commentsNum, dateCreated, id, type, userDisplayName, userId, imageUrl);
                })
                mappedPosts.length = 5;
                return mappedPosts;
            });
    }

}

export const postService = new PostService();