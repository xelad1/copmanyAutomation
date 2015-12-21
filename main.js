var name = 'Hello';
var imageURL = 'www.something.com';
var websiteURL = 'www.somethingelse.com';
var descriptionTitle = 'This is a description';
var twitter = 'xelad1';
var slug = 'hello';
var canonicalURL = '/hello';
var metatext = 'app that says hello, cloud hello app, cloud goodbye';
var documentationURL = 'www.documentation.com';
var description = 'This is an app that keeps all of your hellos in the cloud all the time. Awwwww yeah!';
var pressURL = 'www.github.com/helloapp';
var features = 'onehello; twohello; threehello'
var pricingURL = 'www.this is the price';
var layer = 'application and data';
var company = 'Hello Corp';
var owner = 'xelad1';
var verified = true;

//Collections
var companyIDs = ['#company_name', '#company_image_url', '#company_website_url',
                  '#company_description_field', '#company_twitter_username',
                  '#company_slug', '#company_canonical_url', '#company_owner'];
var companyVariables = [name, imageURL, websiteURL,
                        descriptionTitle, twitter, slug,
                        canonicalURL, owner];
var serviceIDs = ['#service_name', '#service_title', '#service_metatext',
                  '#service_logo_url', '#service_website_url', '#service_documentation_url',
                  '#service_twitter_username', '#service_image_url', '#service_description',
                  '#service_press_url', '#service_features', '#service_pricing_url',
                  '#service_slug', '#service_company_id_field > div > div > input', '#service_canonical_url',
                  '#service_layer_id_field > div > div > input', '#service_owner_id_field > div > div > input'];
var serviceVariables = [name, descriptionTitle, metatext,
                        imageURL, websiteURL, documentationURL,
                        twitter, imageURL, description, 
                        pressURL, features, pricingURL,
                        slug, company, canonicalURL, 
                        layer, owner];


//Company Functionality

// var navigateToCompany = function () {
  
//   $('a[href="/ss-mod/company"]').click();
// }

// var clickToAddCompany = function () {
  
//   $('a[href="/ss-mod/company/new"]').click();
// }

// var fillInCompanyData = function () {

//   for (var i = 0; i < companyIDs.length; i ++) {
//     $(companyIDs[i]).val(companyVariables[i]);
//   }

//   $('#new_company > div.form-group.form-actions > div > button').click();
// }

// navigateToCompany();
// setTimeout(clickToAddCompany, 3000);
// setTimeout(fillInCompanyData, 6000);

//Service Functionality

var navigateToService = function () {
  
  $('a[href="/ss-mod/service"]').click();
}

var clickToAddService = function () {

  $('a[href="/ss-mod/service/new"]').click();
}

var addCompanyService = function () {

  $('#service_functions_service_ids_field > div > a').click();
}

var fillCompanyService = function () {
  
  $('#functions_service_function_id_field > div > div > input').click();
}

var saveCompanyService = function () {
  
  $('#modal > div > div > div.modal-footer > a.btn.btn-primary.save-action').click();
}

var fillInServiceData = function () {
  
  for (var i = 0; i < serviceIDs.length; i ++) {
    $(serviceIDs[i]).val(serviceVariables[i]);
  }
  
  if (verified) {
    $('#service_verified').click();
  };

  $('#service_visible').click();
  setTimeout(addCompanyService, 500);
  setTimeout(fillCompanyService, 1500);
  setTimeout(saveCompanyService, 3000);
}

navigateToService();
setTimeout(clickToAddService, 5000);
setTimeout(fillInServiceData, 7500);













