// Copyright (c) 2022, Hadeel Milad and contributors
// For license information, please see license.txt

frappe.ui.form.on('Store rome', {
	// refresh: function(frm) {

	// }
	// onload: function(frm) {
	// 	show_alert('Hi, do you have a new message', 15);

	// }
	
});
frappe.call({
    method: "gym.gym.doctype.store_rome.store_rome.check_if_doc_is_linked", //dotted path to server method
    callback: function(r) {
        // code snippet
		show_alert('test', 15);

    }
});