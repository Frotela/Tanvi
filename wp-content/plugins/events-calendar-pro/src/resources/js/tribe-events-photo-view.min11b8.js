!function(o,p,_,v,u,b,g,l,c,d){d&&(_().isotope||tec_debug.warn("TEC Debug: vendor isotope was not loaded before its dependent file tribe-photo-view.js")),_(p).ready(function(){var e=b.get_url_param("tribe_paged"),t=b.get_url_param("tribe_event_display"),r=_("#tribe-events-photo-events");function a(e){_().isotope?(e.isotope({itemSelector:".tribe-events-photo-event",percentPosition:!0,masonry:{columnWidth:".tribe-events-photo-grid-sizer",gutter:".tribe-events-photo-gutter-sizer"}}),e.imagesLoaded().progress(function(){e.isotope("layout")})):_("#tribe-events-photo-events").removeClass("photo-hidden").css("opacity","1")}if(g.view="photo",e&&(g.paged=e),"past"==t&&(g.view="past"),a(r),l.pushstate&&!l.map_view()){var i="action=tribe_photo&tribe_paged="+g.paged;v.params.length&&(i=i+"&"+v.params),g.category&&(i=i+"&tribe_event_category="+g.category),b.is_featured()&&(i+="&featured=1"),history.replaceState({tribe_params:i,tribe_url_params:v.params},"",location.href),_(o).on("popstate",function(e){var t=e.originalEvent.state;t&&(g.do_string=!1,g.pushstate=!1,g.popping=!0,g.params=t.tribe_params,g.url_params=t.tribe_url_params,b.pre_ajax(function(){s()}),b.set_form(g.params))})}function n(e){if("change_view"!=tribe_events_bar_action){if(e.preventDefault(),g.ajax_running)return;g.paged=1,g.view="photo",g.popping=!1,b.pre_ajax(function(){s()})}}function s(){if(!g.popping){g.ajax_running=!0,g.filter_cats&&(v.cur_url=_("#tribe-events-header").data("baseurl"));var e=_("#tribe-events-list-hash").val();if(g.params={action:"tribe_photo",tribe_paged:g.paged,tribe_event_display:g.view,featured:b.is_featured()},g.url_params={action:"tribe_photo",tribe_paged:g.paged,tribe_event_display:g.view},v.default_permalinks&&(g.url_params.hasOwnProperty("post_type")||(g.url_params.post_type=c.events_post_type),g.url_params.hasOwnProperty("eventDisplay")||(g.url_params.eventDisplay=g.view)),e.length&&(g.params.hash=e),g.category&&(g.params.tribe_event_category=g.category),_(u).trigger("tribe_ev_serializeBar"),_(u).trigger("serialize-bar.tribe"),b.invalid_date_in_params(g.params))return void(g.ajax_running=!1);_("#tribe-events-header").tribe_spin(),_(".photo-loader").show(),_("#tribe-events-photo-events").addClass("photo-hidden"),g.params=_.param(g.params),g.url_params=_.param(g.url_params),_(u).trigger("tribe_ev_collectParams"),_(u).trigger("collect-params.tribe"),g.pushstate=!1,g.do_string=!0}l.pushstate&&!g.filter_cats?(d&&tec_debug.time("Photo View Ajax Timer"),_(u).trigger("tribe_ev_ajaxStart").trigger("tribe_ev_photoView_AjaxStart"),_(u).trigger("ajax-start.tribe").trigger("photo-view-ajax-start.tribe"),_.post(TribePhoto.ajaxurl,g.params,function(e){if(g.initial_load=!1,b.enable_inputs("#tribe_events_filters_form","input, select"),e.success){g.ajax_running=!1,v.ajax_response={total_count:parseInt(e.total_count),view:e.view,max_pages:e.max_pages,tribe_paged:e.tribe_paged,timestamp:(new Date).getTime()},_("#tribe-events-list-hash").val(e.hash);var t=_.parseHTML(e.html);_("#tribe-events-content").replaceWith(t),_("#tribe-events-content").prev("#tribe-events-list-hash").remove(),_(".tribe-events-promo").next(".tribe-events-promo").remove(),0==e.max_pages&&_("#tribe-events-header").hide(),g.page_title=_("#tribe-events-header").data("title"),g.view_title=_("#tribe-events-header").data("viewtitle"),p.title=g.page_title,_(".tribe-events-page-title").html(g.view_title),g.do_string&&history.pushState({tribe_params:g.params,tribe_url_params:g.url_params},g.page_title,v.cur_url+"?"+g.url_params),g.pushstate&&history.pushState({tribe_params:g.params,tribe_url_params:g.url_params},g.page_title,v.cur_url),a(_("#tribe-events-photo-events")),_(u).trigger("tribe_ev_ajaxSuccess").trigger("tribe_ev_photoView_AjaxSuccess"),_(u).trigger("ajax-success.tribe").trigger("photo-view-ajax-success.tribe"),d&&tec_debug.timeEnd("Photo View Ajax Timer")}})):g.url_params.length?o.location=v.cur_url+"?"+g.url_params:o.location=v.cur_url}_("#tribe-events").on("click","li.tribe-events-nav-next a",function(e){e.preventDefault(),g.ajax_running||("past"==g.view?"1"==g.paged?g.view="photo":g.paged--:g.paged++,g.popping=!1,b.pre_ajax(function(){s()}))}).on("click","li.tribe-events-nav-previous a",function(e){e.preventDefault(),g.ajax_running||("photo"==g.view?"1"==g.paged?g.view="past":g.paged--:g.paged++,g.popping=!1,b.pre_ajax(function(){s()}))}),(l.no_bar()||l.live_ajax()&&l.pushstate)&&_("#tribe-bar-date").on("changeDate",function(e){l.reset_on()||n(e)}),_(u).on("updating-recurrence.tribe",function(){g.popping=!1}),_("#tribe-bar-form").on("submit",function(e){"change_view"!=tribe_events_bar_action&&n(e)}),b.snap("#tribe-events-content-wrapper","#tribe-events-content-wrapper","#tribe-events-footer .tribe-events-nav-previous a, #tribe-events-footer .tribe-events-nav-next a"),_(u).on("run-ajax.tribe",function(){s()}),d&&tec_debug.info("TEC Debug: tribe-events-photo-view.js successfully loaded"),g.view&&d&&tec_debug.timeEnd("Tribe JS Init Timer")})}(window,document,jQuery,tribe_ev.data,tribe_ev.events,tribe_ev.fn,tribe_ev.state,tribe_ev.tests,tribe_js_config,tribe_debug);