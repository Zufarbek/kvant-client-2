import Repository, { baseUrl } from './Repository';

class MediaRespository {

    async getBannersBySlug(payload) {
        const endPoint = `content/image/${payload}`;

        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                console.log("s-images ",  response);
                if (response.data) {
                    console.log("banner-images ",  response.data.images);
                    return response.data.images;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getPromotionsBySlug(payload) {
        const endPoint = `content/image/${payload}`;
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data) {
                    return response.data.images;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

}

export default new MediaRespository();
