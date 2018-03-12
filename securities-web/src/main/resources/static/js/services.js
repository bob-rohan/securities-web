// Services
securitiesApp
		.service(
				'securitiesService',
				[
						'$resource',
						'$http',
						'$log',
						function($resource, $http, $log) {

							this.getSecurities = function() {

								var GetSecuritiesResource = $resource(
										'http://localhost:8233/getSecurities',
										{
											get : {
												method : "JSON",
												isArray : true,
												headers : {
													'Access-Control-Allow-Origin' : '*'
												}
											}
										});

								var securities = GetSecuritiesResource.query();

								return securities;

							};
						} ]);