# -*- coding: utf-8 -*-
# Copyright (c) 2022, Hadeel Milad and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.rename_doc import get_link_fields


class Storerome(Document):
	pass


@frappe.whitelist()
def check_if_doc_is_linked():
	# doc=frappe.get_all("store rome")
	# link_fields = get_link_fields(doc.doctype)
	# if link_fields :
	# 	frappe.throw('hi hi hi ')
	# else : 
	# 	frappe.throw('Zerooo+9')

	return

    # // business logic 