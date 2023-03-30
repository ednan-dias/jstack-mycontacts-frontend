import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    const baseUrl = {
      dev: process.env.REACT_APP_DEV_BASE_URL,
      prod: process.env.REACT_APP_PROD_BASE_URL,
    };

    this.httpClient = new HttpClient(process.env.NODE_ENV === 'production' ? baseUrl.prod : baseUrl.dev);
  }

  async listCategories(signal) {
    const categories = await this.httpClient.get('/categories', { signal });

    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
