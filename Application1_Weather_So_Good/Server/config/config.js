/*
 * 설정
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/local',
	db_schemas: [{file:'./device_schema', collection:'devices', schemaName:'DeviceSchema', modelName:'DeviceModel'}],
	route_info: [
		{file:'./device', path:'/process/receivedata', method:'receivedata', type:'post'}
	    ,{file:'./device', path:'/process/adddevice', method:'adddevice', type:'post'}
	    ,{file:'./device', path:'/process/listdevice', method:'listdevice', type:'post'}
	    ,{file:'./device', path:'/process/register', method:'register', type:'post'}
	    ,{file:'./device', path:'/process/sendall', method:'sendall', type:'post'}
	],

	fcm_api_key:'AAAAmw3DMM4:APA91bGDW1Wgpq0Yemax7ewKeIr0Qe5zNk2xtq7bozqc3b2T9aeglJu15ir4Zb6wV5qBJQ8aQ0i12Vm2XnUqxJCmxBQf9oQbvlmOh7JeDi5GaNOPu6tiYk_NvWpYnXzMLUfVibtzBsTO'
}