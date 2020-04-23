var moment = require('moment')
var _ = require('lodash')


var dateFormat = function(v){
  return v == "" ? "-" : moment(v).format("MM/DD/YYYY")
}

var status = function(v){
  return v == 0 ? "Inactive" : "Active"
}

module.exports = {
  dateFormat:dateFormat,
  status:status,
}
