import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { sessionRoutes } from '../../../../modules/users/infra/http/routes/session.routes';
import { specificationRoutes } from './specification.routes';
import { usersRoutes } from '../../../../modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/specifications', specificationRoutes);

export { routes };
