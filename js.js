var PropertyName = "";
var ResidentialStatus = "";

var LivingSpace = "";
var PropertyBuilt = "";
var PropertyArea = "";

var ConditionProperty = "";
var BalconyTerrace = "";
var DesiredPrice = "";
var RegionPropertyLocated = "";
var MailingInfo = "";
var Email = "";


var HomeDetails ="";


function clickImg(select,show,hide){
	document.getElementById(select).addEventListener('click',function(){ 
		document.getElementById(show).style.display = "flex";
		document.getElementById(hide).style.display = "none"; 
		PropertyName = this.alt;
		console.log(PropertyName); 

		function residentialStatus(select,show,hide){ 
		document.getElementById(select).addEventListener('click',function(){

			document.getElementById(show).style.display = "flex";
			document.getElementById(hide).style.display = "none";  
			ResidentialStatus = this.alt;
			console.log(ResidentialStatus);

		function condition_property(select,show,hide){

			document.getElementById(select).addEventListener('click',function(){
				document.getElementById(show).style.display = "flex";
				document.getElementById(hide).style.display = "none";  
				ConditionProperty = this.alt;
				console.log(ConditionProperty); 



				function balcony(select,show,hide){
					document.getElementById(select).addEventListener('click',function(){
						document.getElementById(show).style.display = "flex";
						document.getElementById(hide).style.display = "none";  
						
						BalconyTerrace = this.alt;
						console.log(BalconyTerrace);

						document.getElementById('desired_price_range').addEventListener('change',function(){
							DesiredPrice = this.value;
							console.log(DesiredPrice); 

						});


						 document.getElementById("four_next").addEventListener('click',function(){
							 var StreetNo = document.getElementById("StreetNo").value;
							 var Postcode = document.getElementById("Postcode").value;
							 var Place = document.getElementById("Place").value;
							 RegionPropertyLocated = "Street No.: "+ StreetNo + "<br> Post Code: " + Postcode + "<br> Place Name: " + Place;
							 console.log(RegionPropertyLocated);  
						}); 

					}); 


				}
				balcony('balkon','desired_price','balcony');
				balcony('terrasse','desired_price','balcony');
				balcony('balkon_and_terrasse','desired_price','balcony');
				balcony('weder_noch','desired_price','balcony');

			});

			}
			condition_property('renovierungs_bedurftig','balcony','condition');
			condition_property('neuwertig','balcony','condition');
			condition_property('gepflegt','balcony','condition');
		 
	 
			var property_space = document.getElementById("range");
			var sliderOutput = document.getElementById("amount"); 
			property_space.oninput = function(){
			  sliderOutput.innerHTML = this.value;
			  LivingSpace = this.value;
			  console.log(LivingSpace);
			}
			var slider = document.getElementById("property_built_range");
			var output = document.getElementById("property_built_amount"); 
			slider.oninput = function(){
			  output.innerHTML = this.value;
			  PropertyBuilt =  this.value;
			  console.log(PropertyBuilt);
			}

 	   
			
		});
		
		}
		residentialStatus('selbst_bewohunt','property_space','Wohnstatus');
		residentialStatus('frei','property_space','Wohnstatus');
		residentialStatus('vermietet','property_space','Wohnstatus');
		residentialStatus('teilweise_vermietet','property_space','Wohnstatus'); 

			function goBack(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none";

				});
			}
			goBack('one_back','stepOne','Wohnstatus');
			goBack('two_back','Wohnstatus','property_space');
			goBack('three_back','property_space','property_built');
			goBack('four_back','property_built','condition');
			goBack('five_back','condition','balcony');
			goBack('six_back','balcony','desired_price');
			goBack('seven_back','desired_price','property_located');
			goBack('eight_back','property_located','last_step');


			function  goForward(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none";

					 
				}); 

			}
			goBack('one_next','property_built','property_space');
			goBack('two_next','condition','property_built');
			goBack('three_next','property_located','desired_price');
			goBack('four_next','last_step','property_located');
			//goBack('five_next','last_step','property_located');


	});




/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

 document.getElementById("five_next").addEventListener('click',function(){
	 var Firstname = document.getElementById("Firstname").value;
	 var Surname = document.getElementById("Surname").value;
	 var E_mail_address = document.getElementById("E_mail_address").value;
	 var Telephone_number = document.getElementById("Telephone_number").value;

	 Email = E_mail_address;
	 MailingInfo = "First Name: "+Firstname+ "<br> Surname: "+Surname + "<br> Phone Number: "+ Telephone_number + "<br> Email: "+Email;

	 console.log(MailingInfo); 

	 document.getElementById("five_next").style.display = "none";
	 document.getElementById("stepOne").style.display = "none";
 	document.getElementById("completed").innerHTML = "<h1>All DOne</h1>";

});


 
 

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

 

}
clickImg('wohnung_select','Wohnstatus','stepOne');
 
 
 

 
function haus_select(select,show,hide){
	document.getElementById(select).addEventListener('click',function(){ 
		document.getElementById(show).style.display = "flex";
		document.getElementById(hide).style.display = "none"; 
		PropertyName = this.alt;
		console.log(PropertyName); 

		 
		function HomeDetails(select,show,hide){
		document.getElementById(select).addEventListener('click',function(){

			document.getElementById(show).style.display = "flex";
			document.getElementById(hide).style.display = "none";  
			HomeDetails = this.alt;
			console.log(HomeDetails); 

			function residentialStatus(select,show,hide){ 
				document.getElementById(select).addEventListener('click',function(){

				document.getElementById(show).style.display = "flex";
				document.getElementById(hide).style.display = "none";  
				ResidentialStatus = this.alt;
				console.log(ResidentialStatus);


 

				function condition_property(select,show,hide){

					document.getElementById(select).addEventListener('click',function(){
						document.getElementById(show).style.display = "flex";
						document.getElementById(hide).style.display = "none";  
						ConditionProperty = this.alt;
						console.log(ConditionProperty); 




						function balcony(select,show,hide){
							document.getElementById(select).addEventListener('click',function(){
								document.getElementById(show).style.display = "flex";
								document.getElementById(hide).style.display = "none";  
								
								BalconyTerrace = this.alt;
								console.log(BalconyTerrace);

								document.getElementById('desired_price_range').addEventListener('change',function(){
									DesiredPrice = this.value;
									console.log(DesiredPrice); 

								});


								 document.getElementById("four_next").addEventListener('click',function(){
									 var StreetNo = document.getElementById("StreetNo").value;
									 var Postcode = document.getElementById("Postcode").value;
									 var Place = document.getElementById("Place").value;
									 RegionPropertyLocated = "Street No.: "+ StreetNo + "<br> Post Code: " + Postcode + "<br> Place Name: " + Place;
									 console.log(RegionPropertyLocated);  
								}); 

							}); 


						}
						balcony('balkon','desired_price','balcony');
						balcony('terrasse','desired_price','balcony');
						balcony('balkon_and_terrasse','desired_price','balcony');
						balcony('weder_noch','desired_price','balcony');


					});

				}
				condition_property('renovierungs_bedurftig','balcony','condition');
				condition_property('neuwertig','balcony','condition');
				condition_property('gepflegt','balcony','condition');

  

			});

			}
			residentialStatus('selbst_bewohunt','property_space','Wohnstatus');
			residentialStatus('frei','property_space','Wohnstatus');
			residentialStatus('vermietet','property_space','Wohnstatus');
			residentialStatus('teilweise_vermietet','property_space','Wohnstatus'); 
			  
 	   
			
		});

 

		var property_space = document.getElementById("range");
			var sliderOutput = document.getElementById("amount"); 
			property_space.oninput = function(){
			  sliderOutput.innerHTML = this.value;
			  LivingSpace = this.value;
			  console.log(LivingSpace);
			}
			var slider = document.getElementById("property_built_range");
			var output = document.getElementById("property_built_amount"); 
			slider.oninput = function(){
			  output.innerHTML = this.value;
			  PropertyBuilt = this.value;
			  console.log(PropertyBuilt);
			}

			var size_slider = document.getElementById("property_size_range");
			var size_output = document.getElementById("property_size_amount"); 
			size_slider.oninput = function(){
			  size_output.innerHTML = this.value;
			  PropertyArea = this.value;
			  console.log(PropertyArea);
			} 
		
		}
		HomeDetails('einfamilienhaus','Wohnstatus','HomeDetails');
		HomeDetails('mehrfamilienhaus','Wohnstatus','HomeDetails');
		HomeDetails('reihenhaus','Wohnstatus','HomeDetails');
		HomeDetails('doppelhaushalfte','Wohnstatus','HomeDetails'); 








			function goBack(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none";

				}); 
			}
			goBack('one_back','HomeDetails','Wohnstatus');
			goBack('two_back','Wohnstatus','property_space');
			goBack('three_back','property_size','property_built');
			goBack('four_back','property_built','condition');
			goBack('five_back','condition','balcony');
			goBack('six_back','balcony','desired_price');
			goBack('seven_back','desired_price','property_located');
			goBack('eight_back','property_located','last_step');
			goBack('haus_one_back','stepOne','HomeDetails');
			goBack('size_three_back','property_space','property_size');


			function  goForward(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none";

					 
				}); 
 
			}
			 goBack('one_next','property_size','property_space');
			goBack('two_next','condition','property_built');
			goBack('three_next','property_located','desired_price');
			goBack('four_next','last_step','property_located');
			goBack('size_two_next','property_built','property_size');
			//goBack('five_next','last_step','property_located');





/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

 document.getElementById("five_next").addEventListener('click',function(){
	 var Firstname = document.getElementById("Firstname").value;
	 var Surname = document.getElementById("Surname").value;
	 var E_mail_address = document.getElementById("E_mail_address").value;
	 var Telephone_number = document.getElementById("Telephone_number").value;

	 Email = E_mail_address;
	 MailingInfo = "First Name: "+Firstname+ "<br> Surname: "+Surname + "<br> Phone Number: "+ Telephone_number + "<br> Email: "+Email;

	 console.log(MailingInfo); 

	 document.getElementById("five_next").style.display = "none";
	 document.getElementById("stepOne").style.display = "none";
 	document.getElementById("completed").innerHTML = "<h1>All DOne</h1>";

});


 
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


	});


  

}
haus_select('haus_select','HomeDetails','stepOne');
 
 








 function grundstuck_select(select,show,hide){
	document.getElementById(select).addEventListener('click',function(){ 
		document.getElementById(show).style.display = "flex";
		document.getElementById(hide).style.display = "none"; 
		PropertyName = this.alt;
		console.log(PropertyName); 

		function propertyInfo(select,show,hide){
			document.getElementById(select).addEventListener('click',function(){
				document.getElementById(show).style.display = "flex";
				document.getElementById(hide).style.display = "none"; 
				PropertyName = this.alt;
				console.log(PropertyName); 
 				

 				function propertybuilton(select,show,hide){
 					document.getElementById(select).addEventListener('click',function(){
 						document.getElementById(show).style.display = "flex";
						document.getElementById(hide).style.display = "none"; 
						PropertyName = this.alt;
						console.log(PropertyName); 


						document.getElementById('desired_price_range').addEventListener('change',function(){
							DesiredPrice = this.value;
							console.log(DesiredPrice); 

						});


						 document.getElementById("four_next").addEventListener('click',function(){
									 var StreetNo = document.getElementById("StreetNo").value;
									 var Postcode = document.getElementById("Postcode").value;
									 var Place = document.getElementById("Place").value;
									 RegionPropertyLocated = "Street No.: "+ StreetNo + "<br> Post Code: " + Postcode + "<br> Place Name: " + Place;
									 console.log(RegionPropertyLocated);  
								}); 


 					});
 				}
 				propertybuilton('kurzfristingbebaubar','desired_price','propertybuilton');
 				propertybuilton('eingeschrankt','desired_price','propertybuilton');
 				propertybuilton('nicht_bebaubar','desired_price','propertybuilton');
 				propertybuilton('unbekannt','desired_price','propertybuilton');


			});
		}
		propertyInfo('baugrundstuck','propertybuilton','propertyInformation');
		propertyInfo('gewerbegrundstuck','propertybuilton','propertyInformation');
		propertyInfo('agrarflache','propertybuilton','propertyInformation');




		function goBack(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none"; 
				}); 
			}
			goBack('one_back','HomeDetails','Wohnstatus');
			goBack('two_back','Wohnstatus','property_space');
			goBack('three_back','property_size','property_built');
			goBack('four_back','property_built','condition');
			goBack('five_back','condition','balcony'); 
			goBack('six_back','propertybuilton','desired_price');
			goBack('seven_back','desired_price','property_located');
			goBack('eight_back','property_located','last_step');
			goBack('propertyInfo_four_back','stepOne','propertyInformation'); 
			goBack('propertybuilton_four_back','propertyInformation','propertybuilton');
 

			function  goForward(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none"; 
					 
				});  
			} 
			 goBack('one_next','property_size','property_space');
			goBack('two_next','condition','property_built');

			goBack('three_next','property_located','desired_price');
			goBack('four_next','last_step','property_located');
			goBack('size_two_next','property_built','property_size');



	});
}
grundstuck_select('grundstuck','propertyInformation','stepOne');



function gewerbe_select(select,show,hide){
	document.getElementById(select).addEventListener('click',function(){ 
		document.getElementById(show).style.display = "flex";
		document.getElementById(hide).style.display = "none"; 
		PropertyName = this.alt;
		console.log(PropertyName); 


		function commercialpropertyinfo(select,show,hide){
			document.getElementById(select).addEventListener('click',function(){ 
				document.getElementById(show).style.display = "flex";
				document.getElementById(hide).style.display = "none"; 
				PropertyName = this.alt;
				console.log(PropertyName);


				function usagestatusInfo(select,show,hide){
					document.getElementById(select).addEventListener('click',function(){ 
						document.getElementById(show).style.display = "flex";
						document.getElementById(hide).style.display = "none"; 
						PropertyName = this.alt;
						console.log(PropertyName);
					});
				}
				usagestatusInfo('frei_status','property_space','usagestatus');
				usagestatusInfo('vermietet_status','property_space','usagestatus');
				usagestatusInfo('teilweise_vermietet_status','property_space','usagestatus');



			});
 
		}
		commercialpropertyinfo('buro','usagestatus','commercialproperty');
		commercialpropertyinfo('gastgewerbe','usagestatus','commercialproperty');
		commercialpropertyinfo('halle_Produktion','usagestatus','commercialproperty');
		commercialpropertyinfo('hotel_pension','usagestatus','commercialproperty');


			function goBack(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none"; 
				}); 
			}  
			goBack('two_back','usagestatus','property_space');
			goBack('three_back','property_space','property_built');
			goBack('four_back','property_built','condition');
			goBack('five_back','condition','balcony'); 
			goBack('six_back','property_built','desired_price');
			goBack('seven_back','desired_price','property_located');
			goBack('eight_back','property_located','last_step');
			goBack('commercialproperty_four_back','stepOne','commercialproperty');
			goBack('usagestatus_four_back','commercialproperty','usagestatus');  
 

			function  goForward(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none"; 
					 
				});  
			}  
			goBack('one_next','property_built','property_space');
			goBack('two_next','desired_price','property_built'); 
			goBack('three_next','property_located','desired_price');
			goBack('four_next','last_step','property_located');
			goBack('size_two_next','property_built','property_size');





				var property_space = document.getElementById("range");
			var sliderOutput = document.getElementById("amount"); 
			property_space.oninput = function(){
			  sliderOutput.innerHTML = this.value;
			  LivingSpace = this.value;
			  console.log(LivingSpace);
			}
			var slider = document.getElementById("property_built_range");
			var output = document.getElementById("property_built_amount"); 
			slider.oninput = function(){
			  output.innerHTML = this.value;
			  PropertyBuilt = this.value;
			  console.log(PropertyBuilt);
			}
			
	});
}
gewerbe_select('gewerbe','commercialproperty','stepOne');