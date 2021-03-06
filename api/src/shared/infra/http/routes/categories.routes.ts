import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../../../../modules/cars/useCases/createCategory';
import { importCategoryController } from '../../../../modules/cars/useCases/ImportCategory';
import { listCategoriesController } from '../../../../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('image'),
  importCategoryController.handle
);

export { categoriesRoutes };
