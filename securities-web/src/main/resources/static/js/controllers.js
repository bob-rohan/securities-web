// Controller
securitiesApp
		.controller(
				'securitiesController',
				[
						'$scope',
						'$log',
						'securitiesService',
						function($scope, $log, securitiesService) {

							$scope.securities = {};

							function Security(data) {
								this.data = data;

								this.getCode = function() {
									return this.data.code;
								}

								this.getPrice = function() {
									return parseInt(this.data.price);
								}

								this.getMarketCap = function() {
									return parseInt(this.data.marketCapitalization);
								}

								this.getEquity = function() {
									return this.data.fundamentals[this.data.fundamentals.length - 1].totalEquity;
								}

								this.getValueToPrivateOwner = function() {

									var marketCap = parseFloat(this
											.getMarketCap());

									var equity = parseFloat(this.getEquity());

									return parseInt(marketCap / equity * 100);

								}

								this.getAverageEarningsPerShareBasic = function() {

									var total = 0;

									for (var i = 0; i < this.data.fundamentals.length; i++) {

										total += parseFloat(this.data.fundamentals[i].basicEarningsPerShare);

									}

									return parseInt(total
											/ this.data.fundamentals.length);
								}

								this.getAverageEarningsPerShareBasicFactor = function() {

									return parseInt(this.getPrice()
											/ this
													.getAverageEarningsPerShareBasic());
								}

								this.getAverageDividend = function() {

									var total = 0;

									for (var i = 0; i < this.data.fundamentals.length; i++) {

										total += parseFloat(this.data.fundamentals[i].dividendPerShare);

									}

									return parseInt(total
											/ this.data.fundamentals.length);
								}

								this.getAverageDividendPercentOfPrice = function() {

									return parseInt(this.getAverageDividend()
											/ this.getPrice() * 100);
								}
								
								this.getEarningsPerSharePositiveSincePeriod = function(){
									
									var period = "n/a";
									
									for (var i = this.data.fundamentals.length -1; i > -1; i--) {
										if (this.data.fundamentals[i].basicEarningsPerShare > 1){
											period = this.data.fundamentals[i].periodEnd;
										}
									}
									
									return period;
								} 
							}

							$scope.getSecurities = function() {

								$scope.securities = securitiesService
										.getSecurities();

								$scope.securities.$promise
										.then(
										// on success
										function(response) {

											for (var index = 0; index < $scope.securities.length; index++) {

												var security = new Security(
														$scope.securities[index]);

												$scope.securities[index] = security;
											}

										});

							}

							$scope.getSecurities();

						} ]);