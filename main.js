var name = 'Colorify.js';
var imageURL = 'http://img.stackshare.io/service/1150/no-img-open-source.png';
var websiteURL = 'http://colorify.rocks/';
var descriptionTitle = 'The simple, customizable, tiny javascript color extractor';
var twitter = '';
var slug = 'colorifyjs';
var canonicalURL = '/colorifyjs';
var metatext = 'javascript color utility, javascript design tool';
var documentationURL = 'https://github.com/LukyVj/Colorify.js';
var description = 'Colorify is a script written in Javascript, that allows you to extract colors from images, and manipulates them. From a simple plain color, based on the dominant color, to a beautiful gradient based on the image edges colors, colorify.js will spice up your designs!';
var pressURL = 'https://github.com/LukyVj/Colorify.js';
var features = 'Extract the dominant color from an image';
var pricingURL = '';
var toolType = '2';
var layer = 'Utilities';
var owner = '';
var verified = false;

//Collections
var companyIDs = ['#company_name', '#company_image_url', '#company_website_url',
                  '#company_description', '#company_twitter_username',
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
                        slug, name, canonicalURL, 
                        layer, owner];


// Company Functionality

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

// //Navigate to Company Tab First

// clickToAddCompany();
// setTimeout(fillInCompanyData, 3000);

// Service Functionality

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
}

//Navigate to service tab first

clickToAddService()
setTimeout(fillInServiceData, 7500);













