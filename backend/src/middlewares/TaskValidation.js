const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns')

const TaskValidation = async (req, res, next) => {

  const { macaddress, type, title, description, when } = req.body;

  if (!macaddress) {
    return res.status(400).json({
      error: 'O preenchimento do campo macaddress é obrigatório.'
    });
  } else if (!type) {
    return res.status(400).json({
      error: 'O preenchimento do campo tipo é obrigatório.'
    });
  } else if (!title) {
    return res.status(400).json({
      error: 'O preenchimento do campo título é obrigatório.'
    });
  } else if (!description) {
    return res.status(400).json({
      error: 'O preenchimento do campo descrição é obrigatório.'
    });
  } else if (!when) {
    return res.status(400).json({
      error: 'O preenchimento dos campos data e hora são obrigatórios.'
    });
  } else {
    let exists;

    if(req.params.id) {
      exists = await TaskModel.findOne({
        'id': { '$ne': req.params.id }, //id diferente
        'when': { '$eq': new Date(when) }, //Se existe na mesma data e hora
        'macaddress': { '$in': macaddress } //Para o mesmo macaddress
      });
    } else {

      if (isPast(new Date(when))) {
        return res.status(400).json({
          error: 'A data preenchida é inválida.'
        });
      }

      exists = await TaskModel.findOne({
        'when': { '$eq': new Date(when) }, //Se existe na mesma data e hora
        'macaddress': { '$in': macaddress } //Para o mesmo macaddress
      });

    }

    if(exists) {
      return res.json(400).json({
        error: 'Já existe uma atividade nesse dia e horário.'
      })
    }

    next();
  }

}

module.exports = TaskValidation;