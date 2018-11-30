import { BASE_ENDPOINT } from '../../shared/constants';
import VideoPost from '../../models/VideoPost';
import ImagePost from '../../models/ImagePost';
import TextPost from '../../models/TextPost';

class PostService {

    fetchPosts() {
        const POSTS_ENDPOINT = `${BASE_ENDPOINT}/posts`;

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

                const mappedPosts = result
                    .filter((post) => {
                        if (post.videoUrl) {
                            return post.videoUrl.includes('https://www.youtube.com/embed/');
                        }
                        return true;
                    })
                    .map((post) => {

                        switch (post.type) {
                            case "image":
                                return new ImagePost(post);
                            case "video":
                                return new VideoPost(post);
                            case "text":
                                return new TextPost(post);
                            default:
                                throw new Error("Invalid post type");
                        }
                    });
                mappedPosts.length = 5;
                return mappedPosts;
            });
    }

    createPost(data, queryParam) {
        const POSTS_ENDPOINT = `${BASE_ENDPOINT}/${queryParam}`;

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

export const postService = new PostService();