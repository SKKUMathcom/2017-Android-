/**
 * 모바일 단말 관리 스키마
 * 
 * @date 2016-11-10
 * @author Mike
 */

var Schema = {};

Schema.createSchema = function(mongoose) {
	
	// 스키마 정의
	var DeviceSchema = mongoose.Schema({
		mobile: {type: String, index: 'hashed', 'default':''},
		registrationId: {type: String, 'default':''}	
	});
	
	// 입력된 칼럼의 값이 있는지 확인
	DeviceSchema.path('mobile').validate(function (mobile) {
		return mobile.length;
	}, 'mobile 칼럼의 값이 없습니다.');
	
	// 스키마에 static 메소드 추가
	DeviceSchema.static('findByMobile', function(mobile, callback) {
		return this.find({mobile:mobile}, callback);
	});
	
	DeviceSchema.static('findAll', function(callback) {
		return this.find({}, callback);
	});
	
	DeviceSchema.static('load', function(options, callback) {
		options.select = options.select || 'mobile';
	    this.findOne(options.criteria)
	      .select(options.select)
	      .exec(callback);
	});
	
	
	// 모델을 위한 스키마 등록
	mongoose.model('Device', DeviceSchema);
	
	console.log('DeviceSchema 정의함.');

	return DeviceSchema;
};

// module.exports에 DeviceSchema 객체 직접 할당
module.exports = Schema;

