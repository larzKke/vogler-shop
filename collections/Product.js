this.Images = new FilesCollection({
  collectionName: 'Images',
  // debug: true,
  public: true,
  downloadRoute: '/public/images',
  storagePath: process.env.PWD + '/public/images',
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024*1024*10 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Bitte nur Bilder unter 10MB hochladen!';
    }
  }
});

Products = new Mongo.Collection('products');

Products.allow({
    insert: function() {
        return isAdmin();
    },
    update: function() {
        return isAdmin();
    },
    remove: function() {
        return isAdmin();
    }
});

ProductSchema = new SimpleSchema({
    shopID: {
        type: String,
        label: 'Artikel-Nr.'
    },
    name: {
        type: String,
        label: 'Name'
    },
    desc: {
        type: String,
        label: 'Beschreibung'
    },
    price: {
        type: Number,
        decimal: true,
        label: 'Preis'
    },
    weight: {
        type: Number,
        decimal: true,
        label: 'Gewicht'
    },
    picture: {
      type: String,
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
          collection: 'Images'
          // uploadTemplate: 'uploadField', // <- Optional
          // previewTemplate: 'uploadPreview' // <- Optional
        }
      }
    }
});

Products.attachSchema(ProductSchema);
