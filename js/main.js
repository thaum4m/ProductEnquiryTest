(function() {
    var formHelper = {
        getSelectedValue: function(domEl) {
            if (typeof(domEl.selectedIndex) == 'undefined' || 
                domEl.selectedIndex == -1) {

                return null;
            }

            return domEl.options[domEl.selectedIndex].value;
        }
    }
    var productEnquiryForm = {
        addValidators: function() {
            /*
             * When the enquiry type is "Product Complaint" make the following required
             * product name, product size, use-by date and batch code
             */
            var typeEl = document.getElementById('enquiry_type');
            typeEl.onchange = function() {
                var val = formHelper.getSelectedValue(typeEl);
                var isComplaint = (val == 'product_complaint');

                document.getElementById('product_name').required = isComplaint;
                document.getElementById('product_size').required = isComplaint;
                document.getElementById('product_expiry').required = isComplaint;
                document.getElementById('product_code').required = isComplaint;

                // Show the 'required' elements if "Product Complaint" selected
                var showHideStyle = (isComplaint) ? '' : 'display: none';
                document.getElementById('product_name_required').setAttribute('style', showHideStyle);
                document.getElementById('product_size_required').setAttribute('style', showHideStyle);
                document.getElementById('product_expiry_required').setAttribute('style', showHideStyle);
                document.getElementById('product_code_required').setAttribute('style', showHideStyle);
            }
        }
    }

    window.onload = function() {
        productEnquiryForm.addValidators();
    }
})();
