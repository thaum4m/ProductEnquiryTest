registerTest ('Product enquiry - Required fields test', {
    load: function() {
        var self = this;

        var form = $('#product_enquiry_form'); 
        
        var submitEl = form.find('.submit .button');
        var isSubmit = false;

        submitEl.submit(function (e) {
            isSubmit = (typeof(this.id) != 'undefined') && this.id;
        });

        self.test('Form not submited?', function() {
            ok(!isSubmit, 'Form did not submit');
        });
    }
});
