const { Transformer } = module.require("@parcel/plugin");

module.exports = new Transformer({
  async transform({ asset }) {
    return [asset];
  }
});
