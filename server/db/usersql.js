var UserSQL = {
	insert: 'INSERT INTO user(username) VALUES(?)',
	queryAll: 'SELECT * FROM user',
	getUserById: 'SELECT * FROM user WHERE uid = ? ',
};
module.exports = UserSQL;
