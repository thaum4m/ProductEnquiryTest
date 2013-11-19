registerTest ('Product enquiry - Product complaint fields test', {
    load: function() {
        var self = this;

        var form = $('#product_enquiry_form'); 
        
        var submitEl = form.find('.submit .button');
        var isSubmit = false;

        // Input required fields then select "Product Complaint" option
        form.find('#first_name').val('John');
        form.find('#last_name').val('Smith');
        form.find('#email').val('John.Smith@example.com');
        form.find('#contact_no').val('0412345678');
        form.find('#address_line_1').val('123 Test St');
        form.find('#suburb').val('The Suburb');
        form.find('#state').val('NSW');
        form.find('#postcode').val('1234');

        form.find('#enquiry_type').val('product_complaint');
        submitEl.submit(function (e) {
            isSubmit = (typeof(this.id) != 'undefined') && this.id;
        });

        self.test('Form not submited?', function() {
            ok(!isSubmit, 'Form did not submit');
        });
    }
});
