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
var companyIDs = ['company_name', 'company_image_url', 'company_website_url',
                  'company_description_field', 'company_twitter_username',
                  'company_slug', 'company_canonical_url'];
var companyVariables = [name, imageURL, websiteURL,
                        descriptionTitle, twitter, slug,
                        canonicalURL];
var serviceIDs = [];
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














