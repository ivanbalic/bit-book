class ValidationService {
  isTextValid(text) {
    if (
      !text.includes("http") &&
      !text.includes("<") &&
      !text.includes("www")
    ) {
      return true;
    }
    return false;
  }

  isImageUrlValid(url) {
    let splitUrl = url.split(".");
    const extension = splitUrl[splitUrl.length - 1].toLowerCase();
    let imageFormat;

    switch (extension) {
      case "jpg":
      case "png":
      case "svg":
      case "gif":
        imageFormat = true;
        break;
      default:
        imageFormat = false;
    }

    if (
      (url.startsWith("https://") || url.startsWith("http://")) &&
      imageFormat
    ) {
      return true;
    }
    return false;
  }

  isVideoUrlValid(url) {
    if (
      (url.startsWith("https://www.youtube.com") ||
        url.startsWith("http://www.youtube.com")) &&
      (url.includes("watch?v=") || url.includes("embed"))
    ) {
      return true;
    }
    return false;
  }

  isNameValid(name) {
    if (name.length > 2 && name.length < 31) {
      return true;
    }
    return false;
  }

  isEmailValid(email) {
    if (email.includes("@") && email.includes(".com")) {
      return true;
    }
    return false;
  }
}

export const validationService = new ValidationService();
