import Repository, { baseUrl, serializeQuery } from './Repository';

class ProductRepository {
    async getCategories() {
        const endPoint = 'categories'
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getCategoriesChildById(ID) {
        const endPoint = `categories/${ID}`
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getBanners() {
        const endPoint = 'categories/banners'
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new ProductRepository();
