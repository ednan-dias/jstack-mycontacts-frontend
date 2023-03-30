import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient(process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_BASE_URL : process.env.REACT_APP_PROD_BASE_URL);
  }

  async listCategories(signal) {
    const categories = await this.httpClient.get('/categories', { signal });

    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
