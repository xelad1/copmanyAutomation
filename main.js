var name = '';
var imageURL = '';
var websiteURL = '';
var descriptionTitle = '';
var twitter = '';
var slug = '';
var canonicalURL = '';
var metatext = '';
var documentationURL = '';
var description = '';
var pressURL = '';
var features = ''
var pricingURL = '';
var layer = '';
var company = '';

//Collections
var companyIDs = ['#company_name', '#company_image_url', '#company_website_url',
                  '#company_description_field', '#company_twitter_username',
                  '#company_slug', '#company_canonical_url'];
var companyVariables = [name, imageURL, websiteURL,
                        descriptionTitle, twitter, slug,
                        canonicalURL];
var serviceIDs = ['#service_name', '#service_title', '#service_metatext',
                  '#service_logo_url', '#service_website_url', '#service_documentation_url',
                  '#service_twitter_username', '#service_image_url', '#service_description',
                  '#service_press_url', '#service_features', '#service_pricing_url',
                  '#service_slug', '#service_company_id_field > div > div > input', '#service_canonical_url'];
var serviceVariables = [name, descriptionTitle, metatext,
                        imageURL, websiteURL, documentationURL,
                        twitter, imageURL, description, 
                        pressURL, features, pricingURL,
                        slug, company, canonicalURL];

var fillInCompanyData = function () {
  
  for (var i = 0; i < companyIDs.length; i ++) {
    $(companyIDs[i]).val(companyVariables[i]);
  }
}














