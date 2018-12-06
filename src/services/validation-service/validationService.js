
class ValidationService {

    isTextCorrect = (text) => {

        if (text.length > 2 && !text.includes('http') && !text.includes('<') && !text.includes('www')) {
            return true;
        } else {
            return false;
        }
    }

    isImageUrlCorrect = (url) => {

        let splitUrl = url.split(".");
        const extension = splitUrl[splitUrl.length - 1].toLowerCase();
        let imageFormat = false;

        switch (extension) {
            case "jpg":
            case "png":
            case "svg":
            case "gif":
                imageFormat = true;
                break;
            default:
        }

        if ((url.startsWith("https://") || url.startsWith("http://")) && imageFormat) {
            return true;
        } else {
            return false;
        }
    }

    isVideoUrlCorrect = (url) => {
        if ((url.startsWith("https://www.youtube.com") || url.startsWith("http://www.youtube.com")) && (url.includes("watch?v=") || url.includes("embed"))) {
            return true;
        } else {
            return false;
        }
    }

    isNameCorrect = (name) => {

        if (name.length > 2 && name.length < 31 && !name.includes('http') && !name.includes('<') && !name.includes('www')) {
            return true;
        } else {
            return false;
        }
    }
}

export const validationService = new ValidationService();
