// Copyright (c) 2022, Hadeel Milad and contributors
// For license information, please see license.txt

frappe.ui.form.on('membership', {
	// refresh: function(frm) {

	// }
	refresh: function(frm) {
        if (frm.doc.end_date < get_today()) {
            frm.set_value("state", "passive");
		}		
	}
	
});
