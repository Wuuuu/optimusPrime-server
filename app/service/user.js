'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.query(
      'select COLUMN_NAME from information_schema.COLUMNS',
      uid
    );
    return { code: 200, data: user, success: true };
  }
}

module.exports = UserService;
