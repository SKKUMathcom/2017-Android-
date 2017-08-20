/*
 * 사용자 조회를 담당하는 라우팅 함수 정의
 *
 * @date 2016-11-10
 * @author Mike *
 */
var fcm = require('node-gcm');
var config = require('../config/config.js');


var addUser = function(req, res) {
	console.log('User 모듈 안에 있는 addUser 호출됨.');
	
	var database = req.app.get('database');
	 
    var paramMobile = req.body.mobile || req.query.mobile;
    var paramAge = req.body.age || req.query.age;
    var paramSex = req.body.sex|| req.query.sex;
    var paramCarModel= req.body.carModel|| req.query.carModel;
    var paramLatitude= req.body.latitude|| req.query.latitude;
    var paramLongitude = req.body.longitude|| req.query.longitude;
	
    console.log('요청 파라미터 : ' + paramMobile + ', ' + paramAge+ ', ' + 
               paramSex + ', ' + paramCarModel+ ', ' +
               paramLatitude + ', ' + paramLongitude);
    
	// 데이터베이스 객체가 초기화된 경우
	if (database.db) {
		
		// DeviceModel 인스턴스 생성
		var user = new database.Userinf({"mobile":paramMobile, "age":paramAge
										, "sex":paramSex, "carModel":paramCarModel
										, "latitude":paramLatitude, "longitude":paramLongitude
										});

		// save()로 저장
		user.save(function(err) {
			if (err) {
                console.error('단말 정보 추가 중 에러 발생 : ' + err.stack);
                
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				res.write('<h2>단말 정보 추가 중 에러 발생</h2>');
                res.write('<p>' + err.stack + '</p>');
				res.end();
                
                return;
            }
			
		    console.log("단말 데이터 추가함.");
		    
		    console.dir(user);
		    
			res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
			res.write("{code:'200', 'message':'단말 데이터 추가 성공'}");
			res.end();
		     
		});
		
	} else {
		res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
		res.write("{code:'400', 'message':'데이터베이스 연결 실패'}");
		res.end();
	}
	
};



var listUser= function(req, res) {
	console.log('user 모듈 안에 있는 listuser 호출됨.');

	var database = req.app.get('database');
	
	// 데이터베이스 객체가 초기화된 경우
	if (database.db) {
        
		// 1. 모든 단말 검색
		database.Userinf.findAll(function(err, results) {
			if (err) {
				console.error('단말 리스트 조회 중 에러 발생 : ' + err.stack);
                
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				res.write('<h2>단말 리스트 조회 중 에러 발생</h2>');
                res.write('<p>' + err.stack + '</p>');
				res.end();
                
                return;
			}
			  
			if (results) {
				console.dir(results);

				var context = {
					title: '단말 목록',
					devices: results
				};
				
				req.app.render('listdevice', context, function(err, html) {
					res.end(html);
				});
				
			} else {
				res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				res.write('<h2>단말 리스트 조회  실패</h2>');
				res.end();
			}
		});
	} else {
		res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
		res.write('<h2>데이터베이스 연결  실패</h2>');
		res.end();
	}
	
};



var register_user = function(req, res) {
	console.log('user 모듈 안에 있는 register 호출됨.');
	
	var database = req.app.get('database');
	 
    var paramMobile = req.body.mobile || req.query.mobile;
    var paramRegistrationId = req.body.registrationId || req.query.registrationId;
	
    console.log('요청 파라미터 : ' + paramMobile + ', ' + paramRegistrationId);
    
	// 데이터베이스 객체가 초기화된 경우
	if (database.db) {
		
		// 업데이트
		database.DeviceModel.findOneAndUpdate({mobile:paramMobile}, {registrationId:paramRegistrationId}, {multi:true}, function(err, result) {
			if (err) {
                console.error('단말 등록 중 에러 발생 : ' + err.stack);
                
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				res.write('<h2>단말 등록 중 에러 발생</h2>');
                res.write('<p>' + err.stack + '</p>');
				res.end();
                
                return;
            }
			
			if (result) {
				console.log("등록 ID 업데이트함.");
				console.dir(result);
				
				res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
				res.write("{code:'200', 'message':'등록 ID 업데이트 성공'}");
				res.end();
			} else {
				console.log("등록 ID 업데이트 결과 데이터가 없음.");
				
				res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
				res.write("{code:'400', 'message':'등록 ID 업데이트 결과 데이터가 없음'}");
				res.end();
			}
		});

	} else {
		res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
		res.write("{code:'400', 'message':'데이터베이스 연결 실패'}");
		res.end();
	}
	
};


var sendpush = function(req, res) {
	console.log('device 모듈 안에 있는 register 호출됨.');
	
	var database = req.app.get('database');
	 
    var paramData = req.body.data || req.query.data;
	
    console.log('요청 파라미터 : ' + paramData);
    
	// 데이터베이스 객체가 초기화된 경우
	if (database.db) {
        
		// 1. 모든 단말 검색
		database.DeviceModel.findAll(function(err, results) {
			if (err) {
                console.error('푸시 전송을 위한 조회 중 에러 발생 : ' + err.stack);
                
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				res.write('<h2>푸시 전송을 위한 조회 중 에러 발생</h2>');
                res.write('<p>' + err.stack + '</p>');
				res.end();
                
                return;
            }
			  
			if (results) {
				console.dir(results);

				// 등록 ID만 추출
				var regIds = [];
				for (var i = 0; i < results.length; i++) {
					var curId = results[i]._doc.registrationId;
					console.log('등록 ID #' + i + ' : ' + regIds.length);
					
					regIds.push(curId);
				}
				console.log('전송 대상 단말 수 : ' + regIds.length);
				
                if (regIds.length < 1) {
                    console.info('푸시 전송 대상 없음 : ' + regIds.length);
                
                    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                    res.write('<h2>푸시 전송 대상 없음</h2>');
                    res.write('<p>대상 단말을 선택하고 다시 시도하십시오.</p>');
                    res.end();

                    return;
                }
				
				// node-gcm을 이용해 전송
				var message = new fcm.Message({
				    priority: 'high',
				    timeToLive: 3
				});
				message.addData('command', 'show');
				message.addData('type', 'text/plain');
				message.addData('data', paramData);

				var sender = new fcm.Sender(config.fcm_api_key);

				sender.send(message, regIds, function (err, result) {
					if (err) {
                        console.error('푸시 전송 시도 중 에러 발생 : ' + err.stack);
                
                        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                        res.write('<h2>푸시 전송 시도 중 에러 발생</h2>');
                        res.write('<p>' + err.stack + '</p>');
                        res.end();

                        return;
                    }
				    
					console.dir(result);

					res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
					res.write('<h2>푸시 메시지 전송 성공</h2>');
					res.end();
					
				});
				
				
			} else {
				res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				res.write('<h2>단말 리스트 조회  실패</h2>');
				res.end();
			}
		});
	} else {
		res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
		res.write('<h2>데이터베이스 연결  실패</h2>');
		res.end();
	}
	
};



module.exports.addUser = addUser;
module.exports.listUser = listUser;
module.exports.register_user = register_user;
module.exports.sendpush = sendpush;
