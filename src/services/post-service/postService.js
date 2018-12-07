import { BASE_ENDPOINT } from '../../shared/constants';
import VideoPost from '../../models/VideoPost';
import ImagePost from '../../models/ImagePost';
import TextPost from '../../models/TextPost';

import { headers } from '../../shared/headers';

class PostService {

    fetchPosts() {
        const POSTS_ENDPOINT = `${BASE_ENDPOINT}/posts`;

        const options = headers.getRequestHeader()
        console.log(options);

        return fetch(POSTS_ENDPOINT, headers.getRequestHeader())
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

                return mappedPosts;
            });
    }

    fetchSinglePost(postId, postType) {

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

        return fetch(POSTS_ENDPOINT, headers.getRequestHeader())
            .then((response) => {

                return response.json();
            })
            .then((post) => {

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
            })

    }

    createPost(data, queryParam) {
        const POSTS_ENDPOINT = `${BASE_ENDPOINT}/${queryParam}`;

        return fetch(POSTS_ENDPOINT, headers.postRequestHeader(data))

    }

    deletePost = (postId) => {

        const DELETE_POST_ENDPOINT = `${BASE_ENDPOINT}/Posts/${postId}`;

        return fetch(DELETE_POST_ENDPOINT, headers.deleteRequestHeader())
    }

}

export const postService = new PostService();