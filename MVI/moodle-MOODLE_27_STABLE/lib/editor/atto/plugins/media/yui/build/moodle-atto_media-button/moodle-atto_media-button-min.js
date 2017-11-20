YUI.add("moodle-atto_media-button",function(e,t){var n="atto_media",r={URLINPUT:"atto_media_urlentry",NAMEINPUT:"atto_media_nameentry"},i={URLINPUT:"."+r.URLINPUT,NAMEINPUT:"."+r.NAMEINPUT},s='<form class="atto_form"><label for="{{elementid}}_atto_media_urlentry">{{get_string "enterurl" component}}</label><input class="fullwidth {{CSS.URLINPUT}}" type="url" id="{{elementid}}_atto_media_urlentry" size="32"/><br/><button class="openmediabrowser" type="button">{{get_string "browserepositories" component}}</button><label for="{{elementid}}_atto_media_nameentry">{{get_string "entername" component}}</label><input class="fullwidth {{CSS.NAMEINPUT}}" type="text" id="{{elementid}}_atto_media_nameentry" size="32" required="true"/><div class="mdl-align"><br/><button class="submit" type="submit">{{get_string "createmedia" component}}</button></div></form>';e.namespace("M.atto_media").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_currentSelection:null,_content:null,initializer:function(){this.get("host").canShowFilepicker("media")&&this.addButton({icon:"e/insert_edit_video",callback:this._displayDialogue})},_displayDialogue:function(){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1)return;var e=this.getDialogue({headerContent:M.util.get_string("createmedia",n),focusAfterHide:!0,focusOnShowSelector:i.URLINPUT});e.set("bodyContent",this._getDialogueContent()).show()},_getDialogueContent:function(){var t=e.Handlebars.compile(s);return this._content=e.Node.create(t({component:n,elementid:this.get("host").get("elementid"),CSS:r})),this._content.one(".submit").on("click",this._setMedia,this),this._content.one(".openmediabrowser").on("click",function(e){e.preventDefault(),this.get("host").showFilepicker("media",this._filepickerCallback,this)},this),this._content},_filepickerCallback:function(e){e.url!==""&&(this._content.one(i.URLINPUT).set("value",e.url),this._content.one(i.NAMEINPUT).set("value",e.file))},_setMedia:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var n=t.currentTarget.ancestor(".atto_form"),r=n.one(i.URLINPUT).get("value"),s=n.one(i.NAMEINPUT).get("value"),o=this.get("host");if(r!==""&&s!==""){o.setSelection(this._currentSelection);var u='<a href="'+e.Escape.html(r)+'">'+s+"</a>";o.insertContentAtFocusPoint(u),this.markUpdated()}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
