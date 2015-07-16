var Generator = {
  data: {},
  load: function(pkg, name) {
    if(name == undefined) {
      name = pkg;
    }
    this.data[name] = require('./' + pkg);
    return this;
  },
  random: function() {
    var result = {};
    for(var name in this.data) {
      var index = parseInt(Math.random() * this.data[name].length);
      result[name] = this.data[name][index];
    }
    return result;
  },
};
module.exports = Generator;
