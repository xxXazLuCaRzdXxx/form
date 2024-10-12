import { Express as ExpressType } from 'express-serve-static-core'

declare global {
  namespace Express {
    interface Express extends ExpressType {}
  }
}