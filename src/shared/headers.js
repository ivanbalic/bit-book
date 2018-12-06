class Headers {

    getRequestHeader() {
        return {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev',
                'SessionId': sessionStorage.getItem('sessionId'),
            }
        }
    }

    postRequestHeader(data) {
        return {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev',
                'SessionId': sessionStorage.getItem('sessionId'),
            },
            body: JSON.stringify(data),
        }
    }

    deleteRequestHeader() {
        return {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            },
        }
    }

    putRequestHeader(data) {
        return {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            },
            body: JSON.stringify(data)

        }
    }

    /// auth Header === login And Register header
    authHeader(data) {
        return {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Key': 'bitbookdev'
            },
            body: JSON.stringify(data)
        }
    }
}

export const headers = new Headers();
