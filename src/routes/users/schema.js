const answers = require('../../mobile/submission/schema/answerDetailSchema');

module.exports = {
  updateAuditResultSchema: {
    params: {
      properties: {
        auditId: { type: 'string', format: 'uuid' }
      },
      required: ['auditId']
    },
    body: {
      properties: {
        answers
      },
      required: ['answers']
    }
  }
};
