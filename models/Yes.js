var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Yes Model
 * ==========
 */

var Yes = new keystone.List('Yes');

Yes.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Yes.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Relationships
 */

Yes.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

Yes.defaultColumns = 'name, email, isAdmin';
Yes.register();
