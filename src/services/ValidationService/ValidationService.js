class ValidationService {
  isTextValid(text) {
    return (
      !text.includes("http") && !text.includes("<") && !text.includes("www")
    );
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

    return (
      (url.startsWith("https://") || url.startsWith("http://")) && imageFormat
    );
  }

  isVideoUrlValid(url) {
    return (
      (url.startsWith("https://www.youtube.com") ||
        url.startsWith("http://www.youtube.com")) &&
      (url.includes("watch?v=") || url.includes("embed"))
    );
  }

  isNameValid(name) {
    return name.length > 2 && name.length < 31;
  }

  isEmailValid(email) {
    return email.includes("@") && email.includes(".com");
  }
}

export const validationService = new ValidationService();
